import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useLazyGetPokemonByNameQuery } from '../../features/pokemon/pokemon'; // Thay đường dẫn đến hook của bạn
import { PokemonType } from '../../features/pokemon/type'; // Thay đường dẫn đúng đến PokemonType

export default function PokemonScreen() {
  const [pokemonName, setPokemonName] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [pokemonData, setPokemonData] = useState<PokemonType | null>(null); // Thêm kiểu PokemonType | null
  const [error, setError] = useState<string | null>(null); // Cũng thêm kiểu cho error

  const [getPokemonByName, { isLoading }] = useLazyGetPokemonByNameQuery();

  const handleSearch = async () => {
    if (!pokemonName.trim()) {
      return;
    }

    setIsFetching(true);
    setError(null);

    try {
      const result = await getPokemonByName(pokemonName);
      if (result.data) {
        setPokemonData(result.data);
      } else {
        setError('Pokemon not found!');
      }
    } catch (err) {
      setError('Pokemon not found!');
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <SafeAreaView style={{ margin: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Thông tin Pokemon</Text>
      
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10 }}
        placeholder="Nhập tên Pokemon"
        value={pokemonName}
        onChangeText={(text) => setPokemonName(text)}
      />
      
      {error && <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text>}
      
      <TouchableOpacity
        style={{ backgroundColor: 'blue', padding: 10, alignItems: 'center', borderRadius: 5 }}
        onPress={handleSearch}
        disabled={isFetching}
      >
        <Text style={{ color: 'white' }}>{isFetching ? 'Đang tìm...' : 'Tìm kiếm'}</Text>
      </TouchableOpacity>
      
      {isLoading && <Text style={{ marginTop: 10 }}>Đang tải...</Text>}
      
      {pokemonData && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontWeight: 'bold' }}>Tên: {pokemonData.name}</Text>
          <Text>Chiều cao: {pokemonData.height}</Text>
          <Text>Trọng lượng: {pokemonData.weight}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
