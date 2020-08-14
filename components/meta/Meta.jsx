import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  FACEBOOK_URL,
  WEB_URL,
  FACEBOOK,
  TWITTER,
  OG_IMAGE,
} from '../../public/variables/constants';

const Meta = (props) => {
  const { pathname } = useRouter();
  const { title, description } = props;
  const url = `${WEB_URL}${pathname}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default Meta;
