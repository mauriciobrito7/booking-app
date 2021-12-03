import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import {fetchApi, baseUrl} from '../utils/fetchApi';
import Property from '../components/Property';

const Banner = ({purpose, imgUrl, title1, title2, desc1, desc2, buttonText, linkUrl}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imgUrl} width={500} height={500} alt="banner"/>
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br/> {title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
        {desc1}
        <br/>
        {desc2}
      </Text>
      <Button fontSize="xl">
        <Link href={linkUrl}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

export default function Home({propertiesForRent, propertiesForSale}) {
  return (
    <Box>
      <Banner 
        purpose='for sale'
        imgUrl='https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?cs=srgb&dl=pexels-jean-van-der-meulen-1457842.jpg&fm=jpg'
        title1='$1,000,000'
        title2='for sale'
        desc1='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        desc2='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        buttonText='View Property'
        linkUrl='/property'
      />
      <Flex flexWrap="wrap">  
        {propertiesForSale.map(property => (
          <Property property={property} key={property.id}/>
        ))}
      </Flex>
      <Banner
        purpose='for rent'
        imgUrl='https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?cs=srgb&dl=pexels-jean-van-der-meulen-1457842.jpg&fm=jpg'
        title1='$1,000,000'
        title2='for rent'
        desc1='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        desc2='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        buttonText='View Property'
        linkUrl='/property'
      />
    </Box>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
