import {
  Plateform,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";

import logoIMDB from "./assets/logoIMDB-BW.png";
import moviePicture from "./assets/film.jpg";
import actor1 from "./assets/matthew.jpg";
import actor2 from "./assets/anne.jpg";
import actor3 from "./assets/jessica.jpg";
import actor4 from "./assets/mackenzie.jpg";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
          backgroundColor: "black",
          height: "100%",
        }}
      >
        <View style={styles.header}>
          <Image source={logoIMDB} style={styles.logo} />
        </View>
        <View style={styles.movie}>
          <Text style={styles.title}>Interstellar</Text>
          <Text style={styles.subTitle}>
            2014{"    "}PG-13{"    "}2h49min{"    "}Adventure, Drama, Sci-Fi
          </Text>
          <View style={styles.movieContent}>
            <Image source={moviePicture} style={styles.moviePicture} />
            <View>
              <Text style={styles.movieDescription}>
                A team of explorers travel through a wormhole in space in an
                attemp to ensure humanity's survival
              </Text>
              <TouchableOpacity style={styles.addToList}>
                <Text style={styles.colorWhite}>+ ADD TO WATCHLIST</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.rating}>
            <View style={styles.rate}>
              <Ionicons name="ios-star-sharp" size={24} color="yellow" />
              <Text style={styles.rate1}>8.6/10</Text>
              <Text style={styles.underRate}>1.1M</Text>
            </View>
            <View style={styles.rate}>
              <Ionicons name="ios-star-outline" size={24} color="white" />
              <Text style={styles.rate2}>RATE THIS</Text>
            </View>
            <View style={styles.rate}>
              <Text style={styles.rate3}>74</Text>
              <Text style={styles.rate4}>Metascore</Text>
              <Text style={styles.underRate}>46 critic reviews</Text>
            </View>
          </View>
        </View>
        <View style={styles.casting}>
          <View style={styles.castingHeader}>
            <Text style={styles.castingTitle}>Top Billed Cast</Text>
            <Text style={styles.seeAll}>SEE ALL</Text>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.carousel}
          >
            <View style={styles.actor}>
              <Image source={actor1} style={styles.photoCarousel}></Image>
              <Text numberOfLines={1} style={styles.actorName}>
                Matthew McConaughey
              </Text>
              <Text style={styles.actorRole}>Cooper</Text>
            </View>
            <View style={styles.actor}>
              <Image source={actor2} style={styles.photoCarousel}></Image>
              <Text numberOfLines={1} style={styles.actorName}>
                Anne Hathaway
              </Text>
              <Text style={styles.actorRole}>Brand</Text>
            </View>
            <View style={styles.actor}>
              <Image source={actor3} style={styles.photoCarousel}></Image>
              <Text numberOfLines={1} style={styles.actorName}>
                Jessica Chastain
              </Text>
              <Text style={styles.actorRole}>Murph</Text>
            </View>
            <View style={styles.actor}>
              <Image source={actor4} style={styles.photoCarousel}></Image>
              <Text numberOfLines={1} style={styles.actorName}>
                Mackenzie Foy
              </Text>
              <Text style={styles.actorRole}>Murphy</Text>
            </View>
          </ScrollView>
          <Text style={styles.function}>Director</Text>
          <Text style={styles.names}>Christopher Nolan</Text>
          <Text style={styles.function}>Writers</Text>
          <Text style={styles.names}>
            Jonathan Nolan (written by) and Christopher Nolan (written by)
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // HEADER
  header: {
    height: 50,
    backgroundColor: "#393939",
    justifyContent: "center",
  },
  logo: {
    height: 30,
    width: 80,
    resizeMode: "contain",
    marginLeft: 15,
  },
  // MOVIE
  movie: {
    height: 290,
    marginVertical: 10,
    backgroundColor: "#212121",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  title: {
    color: "white",
    fontSize: 25,
    marginBottom: 10,
  },
  subTitle: {
    color: "white",
    fontSize: 12,
  },
  // Movie Content
  movieContent: {
    marginVertical: 15,
    flexDirection: "row",
  },
  moviePicture: {
    width: 80,
    height: 120,
    resizeMode: "contain",
  },
  movieDescription: {
    width: Dimensions.get("window").width - 130,
    marginHorizontal: 20,
    color: "white",
  },
  addToList: {
    marginTop: 15,
    height: 35,
    width: Dimensions.get("window").width - 130,
    marginHorizontal: 20,
    backgroundColor: "#1277BD",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  colorWhite: {
    color: "white",
  },
  // rating
  rating: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  rate: {
    flex: 1,
    alignItems: "center",
  },
  rate1: {
    color: "white",
    fontWeight: "bold",
  },
  underRate: {
    color: "grey",
    fontSize: 12,
  },
  rate2: {
    color: "white",
  },
  rate3: {
    fontSize: 18,
    width: 25,
    textAlign: "center",
    color: "white",
    backgroundColor: "green",
  },
  rate4: {
    color: "white",
    fontSize: 14,
  },
  // CASTING
  casting: {
    marginVertical: 10,
    backgroundColor: "#212121",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  castingHeader: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  castingTitle: {
    color: "white",
    fontSize: 23,
  },
  seeAll: {
    fontSize: 12,
    color: "#1FA8F5",
  },
  // carousel
  carousel: {
    height: 215,
    flexDirection: "row",
    flexWrap: "nowrap",
    marginBottom: 20,
  },
  actor: {
    height: "100%",
    width: 135,
    backgroundColor: "#2A2A2A",
  },
  photoCarousel: {
    width: "100%",
    height: 165,
    resizeMode: "contain",
  },
  actorName: {
    color: "white",
    fontSize: 12,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  actorRole: {
    color: "lightgrey",
    fontSize: 11,
    paddingHorizontal: 10,
  },
  // footer
  function: {
    color: "white",
  },
  names: {
    color: "lightgrey",
    fontSize: 12,
  },
});
