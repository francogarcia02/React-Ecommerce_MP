export const search = (data) => {
  const keywords = {
    'telefonos': 'smartphone',
    'telefono': 'smartphone',
    'celulares': 'smartphone',
    'celular': 'smartphone',
    'computadoras': 'pc',
    'notebooks': 'pc',
    'computadora': 'pc',
    'notebook': 'pc',
    'pc': 'pc',
    'tv': 'smart-tv',
    'televisor': 'smart-tv',
    'televisores': 'smart-tv',
    'smart tv': 'smart-tv',
    'smarttv': 'smart-tv'
  };

  return keywords[data.toLowerCase()] || 'not-found';
}

