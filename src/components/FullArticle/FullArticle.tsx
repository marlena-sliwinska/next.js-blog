import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { UnorderedList, OrderedList, ListItem, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { Title } from './components/Title';
import { Subtitle } from './components/Subtitle';
import { SimpleText } from './components/SimpleText';
import { Code } from './components/Code';
import { Image } from './components/Image';
import { Blockquote } from './components/Blockquote';

const FullArticle = ({ post }) => {
  const customComponents = {
    h2(props) {
      return <Title {...props} />;
    },
    h3(props) {
      return <Subtitle {...props} />;
    },
    p(props) {
      return <SimpleText {...props} />;
    },
    blockquote(blockquote) {
      return <Blockquote {...blockquote} />;
    },
    ul(list) {
      return <UnorderedList pl={4} {...list} />;
    },
    ol(list) {
      return <OrderedList pl={4} {...list} />;
    },
    li(list) {
      return <ListItem>{list.children}</ListItem>;
    },
    a(link) {
      return (
        <Link href={link.href} isExternal fontStyle="italic" color="blue.800">
          {link.children} <ExternalLinkIcon mx={0.5} />
        </Link>
      );
    },
    img(image) {
      return <Image {...image} post={post} />;
    },
    code(code) {
      return <Code {...code} />;
    },
  };
  return <ReactMarkdown components={customComponents}>{post.content}</ReactMarkdown>;
};

export default FullArticle;
