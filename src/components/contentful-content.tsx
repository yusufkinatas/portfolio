import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document, INLINES } from "@contentful/rich-text-types";

import { Link } from "./link/link";

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

export const ContentfulContent = ({ data }: Props) => {
  return <>{documentToReactComponents(data, options)}</>;
};
