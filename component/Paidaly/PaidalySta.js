import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

const PaidalySta = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>
          Қазақ кинематографиясында көптеген тарихи фильмдер бар, олар еліміздің
          бай тарихын, мәдениетін және батырларын бейнелейді. Міне, кейбір
          танымал қазақ тарихи фильмдері: ### 1. **Көшпенділер (Nomad)** Фильм
          XV ғасырдағы Қазақ хандығының қалыптасуы мен дамуын баяндайды. Бұл
          фильмде батырлық эпостардың кейіпкерлері, олардың ерліктері мен
          жаугершілік замандағы күресі суреттеледі. ### 2. **Жау жүрек мың бала
          (Myn Bala: Warriors of the Steppe)** Фильм XVIII ғасырда жоңғар
          шапқыншылығы кезінде қазақ халқының тәуелсіздігі үшін күрескен жас
          батырлардың ерлігін көрсетеді. ### 3. **Қазақ хандығы: Алмас қылыш**
          Бұл фильмде қазақ хандығының құрылуы және сол замандағы тарихи
          оқиғалар бейнеленген. Қазақ халқының бірігуі және жоңғарларға қарсы
          күресі туралы айтылады. ### 4. **Аманат** Фильмде XX ғасырдың басында
          қазақ зиялыларының ұлт-азаттық қозғалысы, олардың ел үшін күресі
          көрсетілген. Әлихан Бөкейхан, Ахмет Байтұрсынұлы және басқа да
          қайраткерлердің өмірі мен қызметі суреттеледі. ### 5. **Томирис**
          Фильм ежелгі сақ патшайымы Томиристің өмірін, оның парсы патшасы
          Кирмен күресін баяндайды. Бұл фильмде Томиристің ерлігі мен батырлығы
          көрсетіледі. ### 6. **Қыз Жібек** Бұл қазақ халқының ең танымал
          эпостарының бірі болып табылатын "Қыз Жібек" жырынан негізделген.
          Фильмде Төлеген мен Жібектің махаббат хикаясы, олардың тағдыры мен
          қайғылы оқиғалары суреттеледі. ### 7. **Алтын Орда** Бұл тарихи сериал
          XIII-XIV ғасырлардағы Алтын Орда мемлекетінің тарихын, оның
          билеушілерінің өмірі мен күресін баяндайды. Бұл фильмдер қазақ
          халқының тарихи жолын, батырларын және маңызды оқиғаларын кеңінен
          көрсетуге бағытталған.
        </Text>
      </View>
    </ScrollView>
  );
};

export default PaidalySta;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: "app-Semi",
  },
});
