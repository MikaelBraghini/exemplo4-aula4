import React, { useState } from 'react'; // Importando React e hook useState

const App = () => {
  const [text, setText] = useState(''); // Estado para armazenar o texto do input
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar o carregamento

  // Função chamada ao pressionar o botão, ativa a animação de carregamento
  const handlePress = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Botão pressionado!'); // Exibe um alerta após 2 segundos
    }, 2000);
  };

  // Dados para serem exibidos na FlatList
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  // Dados organizados em seções para SectionList
  const sections = [
    {
      title: 'Seção 1',
      data: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ],
    },
    {
      title: 'Seção 2',
      data: [
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
      ],
    },
  ];

  return (
    <View style={styles.container}> {/* Contêiner principal */}
      <View style={styles.view}> {/* Bloco de componentes interativos */}
        <Text style={styles.text}>Olá, mundo!</Text> {/* Texto exibido */}
        <Image
          source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }} // Imagem exibida
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Digite algo"
          value={text}
          onChangeText={setText} // Atualiza o estado conforme o texto é digitado
        />
        <Button title="Clique aqui" onPress={handlePress} /> {/* Botão que chama a função handlePress */}
        <TouchableOpacity style={styles.touchableOpacity} onPress={handlePress}> {/* Botão customizado */}
          <Text style={styles.touchableOpacityText}>Toque aqui</Text>
        </TouchableOpacity>
        {isLoading && <ActivityIndicator size="large" />} {/* Indicador de carregamento */}
      </View>
      
      {/* Lista simples */}
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.name}</Text>} // Exibe o nome de cada item
        keyExtractor={(item) => item.id.toString()} // Chave única para cada item
      />

      {/* Lista com seções */}
      <SectionList
        sections={sections}
        renderItem={({ item }) => <Text>{item.name}</Text>} // Exibe o nome de cada item
        renderSectionHeader={({ section: { title } }) => ( // Cabeçalho de cada seção
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        keyExtractor={(item) => item.id.toString()} // Chave única para cada item
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20, // Adiciona espaçamento ao redor
  },
  view: {
    marginBottom: 20, // Espaço abaixo do bloco de componentes
  },
  text: {
    fontSize: 20,
    marginBottom: 10, // Espaço abaixo do texto
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10, // Espaço abaixo da imagem
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10, // Espaçamento interno
  },
  touchableOpacity: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10, // Espaço abaixo do botão
  },
  touchableOpacityText: {
    color: 'white',
    textAlign: 'center', // Centraliza o texto dentro do botão
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20, // Espaço acima do cabeçalho da seção
    marginBottom: 10, // Espaço abaixo do cabeçalho
  },
});

export default App;
