import { Image, StyleSheet, Platform, View, Button, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { CalendarDaysIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";
import { useState } from 'react';


export default function HomeScreen() {

   const [showSearch, setShowSearch] = useState(false)
   const [locations, setLocation] = useState([1, 2, 3])

   const handleLocation = (loc: String) => {
      console.log(`Locatioon ${loc}`);

   }

   return (
      // <ParallaxScrollView
      //    headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      //    headerImage={
      //       <Image
      //          source={require('@/assets/images/partial-react-logo.png')}
      //          style={styles.reactLogo}
      //       />
      //    }>
      //    <ThemedView style={styles.titleContainer}>
      //       <ThemedText type="title">Welcome!</ThemedText>
      //       <HelloWave />
      //    </ThemedView>
      //    <ThemedView style={styles.stepContainer}>
      //       <ThemedText type="subtitle">Step 1: Try it</ThemedText>
      //       <ThemedText>
      //          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
      //          Press{' '}
      //          <ThemedText type="defaultSemiBold">
      //             {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
      //          </ThemedText>{' '}
      //          to open developer tools.
      //       </ThemedText>
      //    </ThemedView>
      //    <ThemedView style={styles.stepContainer}>
      //       <ThemedText type="subtitle">Step 2: Explore</ThemedText>
      //       <ThemedText>
      //          Tap the Explore tab to learn more about what's included in this starter app.
      //       </ThemedText>
      //    </ThemedView>
      //    <ThemedView style={styles.stepContainer}>
      //       <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
      //       <ThemedText>
      //          When you're ready, run{' '}
      //          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
      //          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
      //          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
      //          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
      //       </ThemedText>
      //    </ThemedView>
      // </ParallaxScrollView>


      <ThemedView style={{ flex: 1, position: 'relative' }}>
         <StatusBar style="light" />
         <Image
            blurRadius={70}
            source={require('@/assets/images/bg.png')}
            style={{ position: 'absolute', height: '100%', width: '100%' }}
         />
         <SafeAreaView style={{ display: 'flex', flex: 1, alignItems: 'center', marginTop: 40 }}>
            <View style={{ height: '7%', marginHorizontal: 16, zIndex: 50, width: '95%' }}>
               <View
                  style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', borderRadius: 100, backgroundColor: showSearch ? 'rgba(255,255,255, 0.2)' : 'transparent', }}>
                  {
                     showSearch ? (
                        <TextInput
                           placeholder='Search city'
                           placeholderTextColor={'lightgray'}
                           style={{ paddingLeft: 20, height: 50, flex: 1, color: 'white' }} />
                     ) : null
                  }

                  <TouchableOpacity
                     onPress={() => setShowSearch(!showSearch)}
                     style={{ backgroundColor: 'rgba(255,255,255, 0.3)', borderRadius: 100, padding: 12, margin: 4 }}>
                     <MagnifyingGlassIcon color={'white'} size={25} />
                  </TouchableOpacity>
               </View>
               {
                  locations.length > 0 && showSearch ? (
                     <View style={{ position: 'absolute', width: '100%', top: 64, borderRadius: 20, backgroundColor: '#D1D5DB' }} >
                        {
                           locations.map((loc, i) => {
                              let showBorder = i + 1 != locations.length;
                              let boderClass = showBorder ? 'borderBottomWidth:2, borderColor:"#D1D5DB"' : '';
                              let borderBottom = i + 1 != locations.length ? 2 : 0;
                              return (
                                 <TouchableOpacity
                                    onPress={() => handleLocation(String(loc))}
                                    key={i}
                                    style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 0, padding: 12, paddingHorizontal: 16, borderBottomWidth: borderBottom, borderColor: '#9CA3AF' }}
                                 >
                                    <MapPinIcon color={'gray'} size={20} />
                                    <Text style={{ color: 'black', fontSize: 18, lineHeight: 28, marginLeft: 8 }}>London, Inited Kingdom</Text>
                                 </TouchableOpacity>
                              )
                           })
                        }
                     </View>
                  ) : null
               }
            </View>
            {/* forecase section */}
            <View style={{ marginHorizontal: 16, justifyContent: 'space-around', flex: 1, marginBottom: 8, width: '100%' }}>
               <Text style={{ color: 'white', textAlign: 'center', fontSize: 24, lineHeight: 32, fontWeight: 'bold' }}>
                  London,
                  <Text style={{ fontSize: 18, lineHeight: 28, fontWeight: '500', color: '#D1D5DB' }}>
                     United Kingdom
                  </Text>
               </Text>
               {/* Weather iamge */}
               <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  <Image
                     source={require('@/assets/images/partlycloudy.png')}
                     style={{ width: 208, height: 208, }}
                  />
               </View>
               <View style={{ marginTop: 8 }}>
                  <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white', fontSize: 60, marginLeft: 20 }}>
                     23&#176;
                  </Text>
                  <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, lineHeight: 28, letterSpacing: 1 }}>
                     Partly Cloudy
                  </Text>
               </View>

               {/* Other stats */}
               <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16 }}>
                  <View style={{ flexDirection: 'row', marginLeft: 8, alignItems: 'center', columnGap: 5 }}>
                     <Image
                        style={{ width: 24, height: 24 }}
                        source={require('@/assets/icons/wind.png')}
                     />
                     <Text style={{ color: 'white', fontWeight: 'semibold', fontSize: 16, lineHeight: 24 }}>
                        22km
                     </Text>
                  </View>
                  <View style={{ flexDirection: 'row', marginLeft: 8, alignItems: 'center', columnGap: 5 }}>
                     <Image
                        style={{ width: 24, height: 24 }}
                        source={require('@/assets/icons/drop.png')}
                     />
                     <Text style={{ color: 'white', fontWeight: 'semibold', fontSize: 16, lineHeight: 24 }}>
                        22km
                     </Text>
                  </View>
                  <View style={{ flexDirection: 'row', marginLeft: 8, alignItems: 'center', columnGap: 5 }}>
                     <Image
                        style={{ width: 24, height: 24 }}
                        source={require('@/assets/icons/sun.png')}
                     />
                     <Text style={{ color: 'white', fontWeight: 'semibold', fontSize: 16, lineHeight: 24 }}>
                        22km
                     </Text>
                  </View>
               </View>
            </View>

            {/* Forecast for next days */}
            <View style={{ marginBottom: 15, marginTop: 8, width: '100%', display: 'flex', marginLeft: 45 }}>
               <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginBottom: 15 }}>
                  <CalendarDaysIcon color={'white'} size={24} />
                  <Text style={{ color: 'white', fontSize: 16, lineHeight: 24 }}>Daily forecast</Text>
               </View>
               <ScrollView
                  horizontal
                  contentContainerStyle={{ paddingHorizontal: 15 }}
                  showsHorizontalScrollIndicator={false}
               >
                  <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 80, height: 75, borderRadius: 24, marginLeft: 4, marginRight: 16, backgroundColor: 'rgba(255,255,255, 0.15)' }}>
                     <Image
                        style={{ width: 40, height: 40 }}
                        source={require('@/assets/images/heavyrain.png')} />
                  </View>
               </ScrollView>
            </View>
         </SafeAreaView>

      </ThemedView>

   );
}

const styles = StyleSheet.create({
   titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginTop: 16,
   },
   stepContainer: {
      gap: 8,
      marginBottom: 8,
   },
   reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
   },
});
