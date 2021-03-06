import React from "react";
import {
  StatusBar,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import wateringImg from "../assets/watering.png";

import { Entypo } from "@expo/vector-icons";

import colors from "../styles/colors";
import fonts from "../styles/font";
import { NavigationHelpersContext } from "@react-navigation/core";
import UserIndentification from './UserIndentification';

const Welcome = ({navigation}: any) => {
  return (
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <Text style={styles.title}>
          Gerencie {"\n"}
          suas plantas de{"\n"}
          forma fácil
        </Text>
        <Image source={wateringImg} style={styles.image} resizeMode="contain" />
        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas{"\n"}
          plantas. Nós cuidamos de lembrar você{"\n"}
          sempre que precisar.
        </Text>
        <TouchableOpacity 
        style={styles.button} 
        activeOpacity={0.5}
        onPress={()=> 
          navigation.navigate('UserIndentification')}
        >
          <Entypo name="chevron-right" style={styles.buttonIcon} />
        </TouchableOpacity>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 32,
    fontFamily: fonts.heading,
    textAlign: "center",
    color: colors.heading,
    marginTop: 40,
    lineHeight: 34,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: fonts.text,
    textAlign: "center",
    color: colors.heading,
  },
  image: {
    width: Dimensions.get("window").width * 0.7,
  },
  buttonText: {
    fontSize: 24,
    color: colors.white,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 10,
    width: 55,
    height: 55,
  },
  buttonIcon: {
    fontSize: 32,
    color: colors.white,
    paddingHorizontal: 10,
  },
});
export default Welcome;
