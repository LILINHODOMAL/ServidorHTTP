import express from 'express';

const app = express();

app.use(express.urlencoded({extended:true}));

const host = '0.0.0.0';
const porta = 3000;

var listaAlunos = [];

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
                    <form method="POST" action="/Matricula" class="border p-3 row g-3 " novalidate>
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

function menuView(req, resp){
    resp.send(`
              <html>
                       <head>
                       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                            <title>  Matrícula  </title>
                       </head>
                       <body>
                        <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">Menu</a>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link active" aria-current="page" href="/Matricula">Matricular aluno</a>
                            </div>
                            </div>
                        </div>
                        </nav>
                      </body> 
                       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script> 
                 </html>  
            `)
}

function cadastrarAluno(req, resp){
    const nome      = req.body.nome;
    const sobrenome = req.body.sobrenome;
    const email     = req.body.email;
    const cpf       = req.body.cpf;
    const cidade    = req.body.cidade;
    const estado    = req.body.estado;
    const cep       = req.body.cep;
    
    const aluno = {nome, sobrenome, email, cpf, cidade, estado, cep};

    listaAlunos.push(aluno);
    resp.write(`
                     <html>
                            <head>
                                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                                <title>  Alunos matriculados </title>
                                <meta charset=""utf-8>
                            </head>
                            <body>
                                     <table class="table table-hover">
                                        <thead>
                                             <tr>
                                                <th scope="col"> nome </th>
                                                 <th scope="col"> sobrenome </th>
                                                  <th scope="col"> email </th>
                                                   <th scope="col"> cpf </th>
                                                    <th scope="col"> cidade </th>
                                                     <th scope="col"> estado </th>
                                                      <th scope="col"> cep </th>
                                             </tr>
                                        </thead>
                                        <tbody>`);

                                        for(var i = 0; i < listaAlunos.length; i++){
                                                resp.write(`<tr>
                                                                <td>${listaAlunos[i].nome}</td>
                                                                <td>>${listaAlunos[i].sobrenome}</td>
                                                                <td>>${listaAlunos[i].email}</td>
                                                                <td>>${listaAlunos[i].cpf}</td>
                                                                <td>>${listaAlunos[i].cidade}</td>
                                                                <td>>${listaAlunos[i].estado}</td>
                                                                <td>>${listaAlunos[i].cep}</td> 
                                                            </tr>

                                                    `)    
                                        }

                            resp.write(`  </tbody>                                  

                                        </table>
                                        <a class="btn btn-primary" href="/Matricula">Efetuar outra matricula</a>
                                        <a class="btn btn-secondary" href="/">Voltar ao menu</a>
                                        </body>
                                            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script> 
                                            <html>  
                                    `);
                            resp.end();       
}

app.get('/', menuView)
app.get('/Matricula', MatriculaView);
app.post('/Matricula', cadastrarAluno);

app.listen(porta, host, () => {
    console.log(`Servidor iniciado e em exeção no endereço http://${host}:${porta}`);
}) 