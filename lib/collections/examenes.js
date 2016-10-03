Examenes = new Mongo.Collection("examenes");

Examenes.attachSchema(new SimpleSchema({
  idPregunta: {
    type: String
  },
  fechaA: {
  	type: Date
  },
  fechaM: {
  	type: Date
  }
}));