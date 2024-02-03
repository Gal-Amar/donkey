import { Grid } from '@mantine/core';
import ImageGenerator from './ImageGenerator';



const MyGrid = () => {
  return (
    <Grid id='grid' gutter="lg" align={'center'} justify={'space-around'} style={{padding: '50px'}}>
      <Grid.Col span={'content'} >
        <ImageGenerator id ={10} name={"pic"} kind={"jpeg"}/>
      </Grid.Col>
      <Grid.Col span={'content'}>
       <ImageGenerator id ={10} name={"try"} kind={"jpeg"}/>
      </Grid.Col>
      <Grid.Col span={'content'}>   <ImageGenerator id ={10} name={"pic"} kind={"jpeg"} ></ImageGenerator></Grid.Col>
      <Grid.Col span={'content'}>   <ImageGenerator id ={10} name={"try"} kind={"jpeg"} /></Grid.Col>
      <Grid.Col span={'content'}>   <ImageGenerator id ={10} name={"pic"} kind={"jpeg"} /></Grid.Col>
      <Grid.Col span={'content'}>   <ImageGenerator id ={10} name={"pic"} kind={"jpeg"} /></Grid.Col>
      <Grid.Col span={'content'}>   <ImageGenerator id ={10} name={"try"} kind={"jpeg"} /></Grid.Col>
      <Grid.Col span={'content'}>   <ImageGenerator id ={10} name={"pic"} kind={"jpeg"} /></Grid.Col>
      <Grid.Col span={'content'}>   <ImageGenerator id ={10} name={"pic"} kind={"jpeg"} /></Grid.Col>
      <Grid.Col span={'content'}>   <ImageGenerator id ={10} name={"try"} kind={"jpeg"} /></Grid.Col>
      <Grid.Col span={'content'}>   <ImageGenerator id ={10} name={"pic"} kind={"jpeg"} /></Grid.Col>
      <Grid.Col span={'content'}>   <ImageGenerator id ={10} name={"pic"} kind={"jpeg"} /></Grid.Col>
      <Grid.Col span={'content'}>   <ImageGenerator id ={10} name={"try"} kind={"jpeg"} /></Grid.Col>
      <Grid.Col span={'content'}>   <ImageGenerator id ={10} name={"pic"} kind={"jpeg"} /></Grid.Col>
      <Grid.Col span={'content'}>   <ImageGenerator id ={10} name={"pic"} kind={"jpeg"} /></Grid.Col>
      <Grid.Col span={'content'}>   <ImageGenerator id ={10} name={"try"} kind={"jpeg"} /></Grid.Col>
      <Grid.Col span={'content'}>   <ImageGenerator id ={10} name={"pic"} kind={"jpeg"}  /></Grid.Col>
      <Grid.Col span={'content'}>   <ImageGenerator id ={10} name={"pic"} kind={"jpeg"} /></Grid.Col>
      <Grid.Col span={'content'}>   <ImageGenerator id ={10} name={"try"} kind={"jpeg"} /></Grid.Col>
      <Grid.Col span={'content'}>   <ImageGenerator id ={10} name={"pic"} kind={"jpeg"} /></Grid.Col>    
    </Grid>
  );
}

export default MyGrid;