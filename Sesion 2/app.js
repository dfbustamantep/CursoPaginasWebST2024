new Vue({
    //elemento raiz,# para hablar de un id,en este caso el del div
    el: '#app',
    data: {
      title: 'Hoja de Vida Daniel Felipe Bustamante Pérez',
      headerImage: 'https://img2.rtve.es/i/?w=1600&i=1618587961630.jpg',
      profile: 'Soy estudiante de la UD',
      games: ['Gears', 'FIFA', 'Halo'],
      movies: ['Sonidos de libertad', 'Narnia', 'El libro de la vida'],
      LinkText: 'Yo uso GitHub para subir mis codigos ',
      linkLabel: 'GitHub',
      linkUrl: 'https://github.com/dfbustamantep',

      author:'Daniel Felipe Bustamante Pérez',
      email:'ejemplo@gmail.com',
      
      grades: [
        { course: 'POO', grade: '39' },
        { course: 'Bases de datos', grade: '31' },
        { course: 'Calculo integral', grade: '39' },
      ],
      newCourse: '',
      newGrade: '',
    },
  
    methods: {
      addGrade() {
        if (this.newCourse && this.newGrade) {
          this.grades.push({
            course: this.newCourse,
            grade: this.newGrade,
          });
  
          this.newCourse = '';
          this.newGrade = '';
        }
      },

      uploadImage(event) {
        const file = event.target.files[0];
  
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.headerImage = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      },
    },
  });