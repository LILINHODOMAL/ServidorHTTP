import express from 'express';

const app = express();
const host = '0.0.0.0';
const porta = 3000;

function MatriculaView(req, resp) {
    resp.send(`
                 <html>
                       <head>
                       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                            <title>  Matrícula  </title>
                       </head>
                       <body>
            <div class="container text-center">
                                 <h1 class="mb-3"> Matrícula  </h1>
                    <form class="border p-3 row g-3 " novalidate>
                            <div class="col-md-4">
                                    <label for="Nome" class="form-label">Nome</label>
                                        <input type="text" class="form-control" id="nome" name="nome" placeholder="Digite seu nome..." required>
   
                            </div>
                            <div class="col-md-4">
                                <label for="Sobrenome" class="form-label">Sobrenome</label>
                                    <input type="text" class="form-control" id="sobrenome" name="sobrenome" placeholder="Digite seu sobrenome..." required>
    
                            </div>
                            <div class="col-md-4">
                                <label for="Email" class="form-label">Email</label>
                                <div class="input-group has-validation">
                                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                                        <input type="text" class="form-control" id="email" name="email" placeholder="Ex:username@gmail.com..." required>-  
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label for="cpf" class="form-label">CPF</label>
                                    <input type="text" class="form-control" id="cpf" name="cpf" placeholder="xxx.xxx.xxx-xx" required>
    
                            </div>
                            <div class="col-md-6">
                                <label for="cidade" class="form-label">Cidade</label>
                                    <input type="text" class="form-control" id="cidade" name="cidade" placeholder="Digite o nome da cidade..." required>
                            </div>
                            <div class="col-md-3">
                                <label for="estado" class="form-label">Estado</label>
                                    <select class="form-select" id="estado" name="estado" required>
                                        <option selected disabled value="">Escolha...</option>
                                        <option>SP</option>
                                    </select>
                            </div>
                            <div class="col-md-3">
                                <label for="cep" class="form-label">Cep</label>
                                    <input type="text" class="cep" id="cep" name="cep" placeholder="xxxxx-xxx" required>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">Enviar matrícula</button>
                            </div>
                    </form>
                            </div>
            </div>                
                       </body>
                      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script> 
                 </html> 
        
        
            `)
}

app.get('/Matricula', MatriculaView);

app.listen(porta, host, () => {
    console.log(`Servidor iniciado e em exeção no endereço http://${host}:${porta}`);
}) 