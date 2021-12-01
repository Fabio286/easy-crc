class AlgorithmException extends Error {
   message = 'Unknown algorithm';
   algorithm?:string = undefined;

   constructor(algorithm: string){
      super(algorithm);
      this.algorithm = algorithm;
      this.message = `Unknown algorithm "${this.algorithm}"`;
      this.name = "AlgorithmException";
   }
}

export { AlgorithmException }