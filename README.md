## Instalação

Instale o repositório rick-and-morty com ```yarn```

```bash
  yarn 
  cd rick-and-morty
  yarn start
```

# Componente CharactersList
Esse componente exibe uma lista de personagens com base nos dados fornecidos na propriedade 'characters'.

# Componente CustomSlider
Esse componente é uma seção de sliders que mostra os episódios de todas as temporadas da serie. Cada slider contém uma lista de episódios que podem ser navegados horizontalmente.

# Componente EpisodesList
Esse componente renderiza uma lista de episódios em um slider utilizando o pacote react-slick. Cada episódio é representado pelo componente EpisodesList que recebe informações como nome, data de exibição, número do episódio e personagens.

# Componente Pagination
O componente Pagination é responsável por renderizar os botões de paginação da interface, permitindo que o usuário navegue entre as diferentes páginas de resultados. Ele recebe as informações de página atual, total de páginas e a função para lidar com a mudança de página.

# Componente de pesquisa SearchContainer
Este componente é responsável por exibir um campo de pesquisa com um ícone de lupa que permite filtrar os personagens por nome. Quando o usuário digita algo no campo de pesquisa, o valor é armazenado no estado 'searchValue' e a função 'handleSearchChange' é chamada para atualizar o estado com o novo valor.
    