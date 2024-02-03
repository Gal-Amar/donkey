import HeaderSearch from "./Navbar";
import { Center } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import { IconPrinter } from '@tabler/icons-react';

import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
  rem,
} from '@mantine/core';


const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    alignContent: 'center',
    borderColor: 'black',
  },

  section: {
    borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.lg,
  },

  text: {
    fontFamily: 'Calibri',
    fontSize: '20px',
    
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

const PrintablePage = (props) => {
  const { classes, theme } = useStyles();

  return (
    <div className="printable-page">
      <Center h={100} mx="auto">
        <h1 >  תמונה של {props.hebName} </h1>
      </Center>
      <Center>
        <Card maw={1200} mah={1000} withBorder radius="md" p="md" shadow="lg" className={classes.card}>
       
          <Card.Section pb={20}>
            <Image
              // src={require(`./../assets/${props.name}.${props.kind}`)}
              alt="Spongebob"
              height={800}
            />
          </Card.Section>

          <Group >
            <Button leftIcon={<IconPrinter size='2rem' />}
             variant="light" color="red" radius="md" size={20} fontFamily='Calibri' style={{ flex: 1 }}>
              להדפיס את הדף 
            </Button>
            <ActionIcon variant="light" color="red" radius="lg" size={45} >
              <IconHeart size="2rem" className={classes.like} stroke={2} />
            </ActionIcon>
          </Group>
        </Card>
      </Center>
    </div>
  );
}

export default PrintablePage;