import { Text } from '@chakra-ui/react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Image from 'next/image';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { IArticle } from 'components/Article/Article.model';

const FullArticle = ({ post }) => {
  // todo: move to some utils
  const customComponents = {
    img(image) {
      return (
        <Image
          width={150}
          height={150}
          src={`/images/posts/${post.slug}/${image.src}`}
          alt={image.alt}
        />
      );
    },
    code(code) {
      const { children, className } = code;
      const language = className ? className.split('-')[1] : 'javascript';
      return (
        <SyntaxHighlighter language={language} style={tomorrow}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };
  return <ReactMarkdown components={customComponents}>{post.content}</ReactMarkdown>;
};

export default FullArticle;
