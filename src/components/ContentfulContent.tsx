import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document, INLINES } from "@contentful/rich-text-types";
import Link from "./Link";

interface Props {
  data: Document;
}

const options: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <div>{children}</div>,
    [INLINES.HYPERLINK]: (node, children) => (
      <Link href={node.data.uri}>{children}</Link>
    ),
  },
};

function ContentfulContent({ data }: Props) {
  return <>{documentToReactComponents(data, options)}</>;
}

export default ContentfulContent;
