import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import { Fabed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import DefaultImage from '../assets/images/house.jpg'	
import millify from 'millify';

function Property({property: {coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID}}) {
	return (
		<Link href={`/property/${externalID}`} passHref>
			<Flex flexWrap="wrap" w="420px" paddingTop="0" justifyContent="flex-start" cursor="pointer">
				<Box w="100%" h="100%" overflow="hidden">
					<Image src={coverPhoto ? coverPhoto.url : DefaultImage} alt="house" width={400} height={260}/>
				</Box>
			</Flex>
		</Link>
  )
}

export default Property
