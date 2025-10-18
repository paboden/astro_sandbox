import { visit } from 'unist-util-visit';

interface Options {
  spaceMarker: string;
  replacement: string;
}

function customRemarkCodeTitle(options?: Options) {
  return (tree: any) => {
    visit(tree, 'code', (node, index) => {

      const spaceMarker = options?.spaceMarker ?? "---";
      const replacement = options?.replacement ?? " ";

      const [ language, title ] = (node.lang || '').split(':');

      if (!title) {
        return node;
      }

      const className = 'custom-remark-code-title'

      const innerClassName = 'inner-custom-remark-code-title'

      const regex = new RegExp(spaceMarker, 'gi'); 

      const titleNode = {
        type: 'html',
        value: `<div class="${className}"><div class="${innerClassName}">${title.replace(regex, replacement)}</div></div>`.trim()
      };

      tree.children.splice(index, 0, titleNode);
      node.lang = language;

      return node;
    });
  };
}

export default customRemarkCodeTitle;