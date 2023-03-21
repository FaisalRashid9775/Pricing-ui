
import { Box, VStack, Icon, StackProps,  HStack,Stack, Text } from '@chakra-ui/react';
import {
  HassleFreeIcon,
  MoneyBackGuaranteeIcon,
  MonthlySubscriptionIcon,
} from '../../Icons/Icons';

interface FeatureProps extends StackProps {
  icon: React.ElementType;
}

function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing='24px'>
      <Icon as={icon} boxSize='48px' />
      <Text textAlign='left' fontSize='18px' fontWeight='500'>
        {children}
      </Text>
    </HStack>
  );
}

export default function Features() {
  return (
    <Box maxW='1024px' m='auto' pt='60px' pb='32px' as='section'>
      <Stack px={{lg:'8',base:'8'}} spacing='20px' direction={{base:'column', lg:'row'}}>
        <Feature icon={MoneyBackGuaranteeIcon}>
          30 days money back Guarantee
        </Feature>
        <Feature icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>
        <Feature icon={MonthlySubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </Stack>
    </Box>
  );
}