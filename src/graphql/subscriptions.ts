/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateMovie = /* GraphQL */ `
  subscription OnCreateMovie {
    onCreateMovie {
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
export const onUpdateMovie = /* GraphQL */ `
  subscription OnUpdateMovie {
    onUpdateMovie {
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
export const onDeleteMovie = /* GraphQL */ `
  subscription OnDeleteMovie {
    onDeleteMovie {
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
export const onCreateSeason = /* GraphQL */ `
  subscription OnCreateSeason {
    onCreateSeason {
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
export const onUpdateSeason = /* GraphQL */ `
  subscription OnUpdateSeason {
    onUpdateSeason {
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
export const onDeleteSeason = /* GraphQL */ `
  subscription OnDeleteSeason {
    onDeleteSeason {
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
export const onCreateEpisode = /* GraphQL */ `
  subscription OnCreateEpisode {
    onCreateEpisode {
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
export const onUpdateEpisode = /* GraphQL */ `
  subscription OnUpdateEpisode {
    onUpdateEpisode {
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
export const onDeleteEpisode = /* GraphQL */ `
  subscription OnDeleteEpisode {
    onDeleteEpisode {
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
export const onCreateCategoryMovie = /* GraphQL */ `
  subscription OnCreateCategoryMovie {
    onCreateCategoryMovie {
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
export const onUpdateCategoryMovie = /* GraphQL */ `
  subscription OnUpdateCategoryMovie {
    onUpdateCategoryMovie {
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
export const onDeleteCategoryMovie = /* GraphQL */ `
  subscription OnDeleteCategoryMovie {
    onDeleteCategoryMovie {
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
