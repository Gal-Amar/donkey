import { Image, Box } from '@mantine/core';

const ImageGenerator = (props) => {
  
  return (
    <Box id="image-box"  mx="auto">
      <Image 
        id="image-grid"
        radius="md"
        // src={require(`./../images/${props.name}.${props.kind}`)}
        alt='${id}'
        caption={`cdlsjcl ${props.id}`}
        width={200}
        height={150}
        
      />
    </Box>
  );
}
 
export default ImageGenerator;