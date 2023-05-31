import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document, INLINES } from "@contentful/rich-text-types";

import Link from "./link";

interface Props {
  data: Document;
}

const options: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => <div>{children}</div>,
    [INLINES.HYPERLINK]: ({ data }, children) => (
      <Link href={data.uri}>{children}</Link>
    ),
  },
};

const ContentfulContent = ({ data }: Props) => {
  return <>{documentToReactComponents(data, options)}</>;
};

export default ContentfulContent;
