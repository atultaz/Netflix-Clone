/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      title
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      movies {
        items {
          id
          movieID
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      title
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      movies {
        items {
          id
          movieID
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      title
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      movies {
        items {
          id
          movieID
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createMovie = /* GraphQL */ `
  mutation CreateMovie(
    $input: CreateMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    createMovie(input: $input, condition: $condition) {
      id
      title
      poster
      year
      numberOfSeasons
      plot
      cast
      creator
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      seasons {
        items {
          id
          name
          movieID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      categories {
        items {
          id
          movieID
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateMovie = /* GraphQL */ `
  mutation UpdateMovie(
    $input: UpdateMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    updateMovie(input: $input, condition: $condition) {
      id
      title
      poster
      year
      numberOfSeasons
      plot
      cast
      creator
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      seasons {
        items {
          id
          name
          movieID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      categories {
        items {
          id
          movieID
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteMovie = /* GraphQL */ `
  mutation DeleteMovie(
    $input: DeleteMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    deleteMovie(input: $input, condition: $condition) {
      id
      title
      poster
      year
      numberOfSeasons
      plot
      cast
      creator
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      seasons {
        items {
          id
          name
          movieID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      categories {
        items {
          id
          movieID
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createSeason = /* GraphQL */ `
  mutation CreateSeason(
    $input: CreateSeasonInput!
    $condition: ModelSeasonConditionInput
  ) {
    createSeason(input: $input, condition: $condition) {
      id
      name
      movieID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      movie {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        creator
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        seasons {
          nextToken
          startedAt
        }
        categories {
          nextToken
          startedAt
        }
      }
      episodes {
        items {
          id
          title
          poster
          duration
          plot
          video
          seasonID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateSeason = /* GraphQL */ `
  mutation UpdateSeason(
    $input: UpdateSeasonInput!
    $condition: ModelSeasonConditionInput
  ) {
    updateSeason(input: $input, condition: $condition) {
      id
      name
      movieID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      movie {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        creator
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        seasons {
          nextToken
          startedAt
        }
        categories {
          nextToken
          startedAt
        }
      }
      episodes {
        items {
          id
          title
          poster
          duration
          plot
          video
          seasonID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteSeason = /* GraphQL */ `
  mutation DeleteSeason(
    $input: DeleteSeasonInput!
    $condition: ModelSeasonConditionInput
  ) {
    deleteSeason(input: $input, condition: $condition) {
      id
      name
      movieID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      movie {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        creator
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        seasons {
          nextToken
          startedAt
        }
        categories {
          nextToken
          startedAt
        }
      }
      episodes {
        items {
          id
          title
          poster
          duration
          plot
          video
          seasonID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createEpisode = /* GraphQL */ `
  mutation CreateEpisode(
    $input: CreateEpisodeInput!
    $condition: ModelEpisodeConditionInput
  ) {
    createEpisode(input: $input, condition: $condition) {
      id
      title
      poster
      duration
      plot
      video
      seasonID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      season {
        id
        name
        movieID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        movie {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        episodes {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateEpisode = /* GraphQL */ `
  mutation UpdateEpisode(
    $input: UpdateEpisodeInput!
    $condition: ModelEpisodeConditionInput
  ) {
    updateEpisode(input: $input, condition: $condition) {
      id
      title
      poster
      duration
      plot
      video
      seasonID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      season {
        id
        name
        movieID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        movie {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        episodes {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteEpisode = /* GraphQL */ `
  mutation DeleteEpisode(
    $input: DeleteEpisodeInput!
    $condition: ModelEpisodeConditionInput
  ) {
    deleteEpisode(input: $input, condition: $condition) {
      id
      title
      poster
      duration
      plot
      video
      seasonID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      season {
        id
        name
        movieID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        movie {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        episodes {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const createCategoryMovie = /* GraphQL */ `
  mutation CreateCategoryMovie(
    $input: CreateCategoryMovieInput!
    $condition: ModelCategoryMovieConditionInput
  ) {
    createCategoryMovie(input: $input, condition: $condition) {
      id
      movieID
      categoryID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      category {
        id
        title
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        movies {
          nextToken
          startedAt
        }
      }
      movie {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        creator
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        seasons {
          nextToken
          startedAt
        }
        categories {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateCategoryMovie = /* GraphQL */ `
  mutation UpdateCategoryMovie(
    $input: UpdateCategoryMovieInput!
    $condition: ModelCategoryMovieConditionInput
  ) {
    updateCategoryMovie(input: $input, condition: $condition) {
      id
      movieID
      categoryID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      category {
        id
        title
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        movies {
          nextToken
          startedAt
        }
      }
      movie {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        creator
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        seasons {
          nextToken
          startedAt
        }
        categories {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteCategoryMovie = /* GraphQL */ `
  mutation DeleteCategoryMovie(
    $input: DeleteCategoryMovieInput!
    $condition: ModelCategoryMovieConditionInput
  ) {
    deleteCategoryMovie(input: $input, condition: $condition) {
      id
      movieID
      categoryID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      category {
        id
        title
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        movies {
          nextToken
          startedAt
        }
      }
      movie {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        creator
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        seasons {
          nextToken
          startedAt
        }
        categories {
          nextToken
          startedAt
        }
      }
    }
  }
`;
