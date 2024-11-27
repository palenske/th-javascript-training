let names = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']

    function concatName() {

    if (names.length > 0) {
      return `${names[names.length - 1]}, ${names[0]}`;
    }
    return '';
    }
    console.log(concatName());