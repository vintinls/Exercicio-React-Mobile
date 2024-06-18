import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import { styles } from './style'; 
import Header from '../../components/Header/index'; 

type CardProps = {
  imageUrl: string;
};

const Card: React.FC<CardProps> = ({ imageUrl }) => (
  <View style={styles.card}>
    <Image source={{ uri: imageUrl }} style={styles.cardImage} />
  </View>
);

const HomeScreen: React.FC = () => {
  
  const images = [
    'https://a-static.mlcdn.com.br/450x450/poster-cartaz-homem-aranha-sem-volta-para-casa-a-pop-arte-poster/poparteskins2/15938541928/eab0331747ef83ad0e878c1ea4535160.jpeg',
    'https://img.elo7.com.br/product/main/268D497/big-poster-filme-superman-o-retorno-lo02-tamanho-90x60-cm-dc-comics.jpg',
    'https://img.elo7.com.br/product/main/266036C/big-poster-filme-vingadores-ultimato-lo47-tamanho-90x60-cm-vingadores.jpg',
    'https://br.web.img3.acsta.net/r_1280_720/pictures/17/04/18/18/31/254981.jpg',
    'https://www.originalfilmart.com/cdn/shop/products/superman_1978_original_film_art_5000x.jpg?v=1577250188',
    'https://image.tmdb.org/t/p/original/sKK8syhz0sEoRVjb6OKULuMLCq3.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwvLCFNv-FtLCD79hJlbb8TH5-fBHLsViyvA&s',
    'https://oregional.com.br/media/blog/24a123834a071fbf60c7147fb78f60ef.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTnqDmi1pKTJ2E-6PktvYoi_dXR-EkcMUubg&s',
  ];

  const texts = [
    'Super Heróis',
    'Para a criançada',
    'De tirar o fôlego',
  ];

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        {images.map((imageUrl, index) => (
          <React.Fragment key={index}>
            {index % 3 === 0 && index / 3 < texts.length && (
              <Text style={styles.text}>{texts[index / 3]}</Text>
            )}
            <Card imageUrl={imageUrl} />
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
