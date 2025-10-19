// src/pages/api/parks.json.ts
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const parks = await getCollection('nps_parks_source');

  const myNationalParkListings = new Map();
  const filteredNationalParks = new Set();

  parks.forEach(item => {
    item?.data?.data?.forEach(park => {

      if (park) {

        // When these items are deleted, the file is 900KB.
        // When they are in, the file is 3.3MB.
        park.activities.forEach(function(activity, index) {
          delete park?.activities?.[index]?.id;
          park.activities[index] = activity.name as Object;
        })

        park.topics.forEach(function(topic, index) {
          delete park?.topics?.[index]?.id;
          park.topics[index] = topic.name as Object;
        })

        // delete park?.entranceFees;
        // delete park?.entrancePasses;
        // delete park?.images;
        // delete park?.multimedia;
        // delete park?.operatingHours;
        // delete park?.fullName;
        // delete park?.latLong;
        // delete park?.weatherInfo;
        // delete park?.directionsInfo;
        // delete park?.directionsUrl;
        // delete park?.parkCode;
        // delete park?.relevanceScore;

        // Adding the park as an indexed item to this array will filter 
        // out duplicates.
        myNationalParkListings.set(park.id, park);
      }
    })
  });

  // Since each item was indexed into an array using its ID, to help filter
  // out duplicates, we need to convert those individual indexed arrays back
  // into plain objects for our final data array. 
  myNationalParkListings.forEach((item) => {

    const states = item.states.split(',');
    const state = states.at(0).toLowerCase();

    const data = {
      id: item.parkCode,
      data: item,
      filePath: `src/content/data/nps-parks-api/${state}.json`,
      collection: "nps_parks_data",
    }
    filteredNationalParks.add(data);
  })

  const collection = Array.from(filteredNationalParks);

  const Wrapper = {
    length: myNationalParkListings.size,
    items: Array.from(filteredNationalParks),
  };

  return new Response(JSON.stringify(collection), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};