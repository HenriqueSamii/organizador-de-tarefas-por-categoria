var app = angular
    .module('myApp', []);
    app.controller('tarefasPendentes', ['$scope', function ($scope) {
        //ver in e of nos for
        //for(categoria of categorias)
        $scope.categorias = ['Casa','Trabalho','Faculdade'];

        $scope.tarefas = [
            { nome: 'Varrer o quarto', categoria: 'Casa', feito: false },
            { nome: 'Lavar a louça', categoria: 'Casa', feito: true },
            { nome: 'Lavar as roupas', categoria: 'Casa', feito: false },
            { nome: 'Consertar a porta', categoria: 'Casa', feito: false },
            { nome: 'Terminar o relatório', categoria: 'Trabalho', feito: false },
            { nome: 'Estudar para a próxima reunião', categoria: 'Trabalho', feito: false },
            { nome: 'Enviar email sobre o problema', categoria: 'Trabalho', feito: false },
            { nome: 'Levar pó de café', categoria: 'Trabalho', feito: true },
            { nome: 'Comprar canetas novas', categoria: 'Trabalho', feito: true },
            { nome: 'Estudar Etapa 1', categoria: 'Faculdade', feito: true },
            { nome: 'Estudar Etapa 2', categoria: 'Faculdade', feito: true },
            { nome: 'Estudar Etapa 3', categoria: 'Faculdade', feito: false },
            { nome: 'Fazer TP1', categoria: 'Faculdade', feito: false }
        ];

        $scope.funcaoCheckBox = function(marca){
            marca.feito = !marca.feito;
        };

        //$scope.categoria = null;

        $scope.mostrarCategoria = function() {
            $scope.trocarCategoria = true;
        };
        $scope.esconderrCategoria = function() {
            $scope.trocarCategoria = false;
        };
        $scope.novaCategoria = function(inserirCataegoria){
            //alert(inserirCataegoria);
            for(categoria of categorias){
                if(str.toLowerCase(inserirCataegoria) == str.toLowerCase(categoria)){
                    alert("Esta cataegoria já existe");
                }
                categorias.push(inserirCataegoria);
                alert("A cataegoria "+ inserirCataegoria + " foi inserida");
                $scope.trocarCategoria = false;
            }
        };
        

        //$scope.tarefa = null;
        
        $scope.mostrarTarefa = function() {
            $scope.trocarTarefa = true;
        };
        $scope.esconderTarefa = function() {
            $scope.trocarTarefa = false;
        };
        $scope.novaTarefa = function(inserirTarefa,selectCategoria){
            for(tarefa of tarefas){
                if(str.toLowerCase() == str.toLowerCase()){
                    alert("Esta tarefa já existe");
                }
                tarefas.push({ nome: inserirTarefa, categoria: selectCategoria, feito: false});
                alert("A tarefa "+ inserirTarefa + " foi inserida");
                $scope.trocarTarefa = false;
            }
        };
    }]);


    /*app.controller('tarefasConcluidas', ['$scope', function ($scope) {
        $scope.tabela = ;
    }]);*/