<template>
    <div class="container">
        <h1>{{ msg }}</h1>

        <div v-show="showForm" class="justify-content-center">
            <label>Name</label>
            <div class="row">
                <div class="col-sm-3">
                    <input class="form-control" type="text" v-model="name" />
                </div>
            </div>
            <label>Fun Fact</label>
            <div class="row">
                <div class="col-sm-3">
                    <input class="form-control" type="text" v-model="funFact" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3">
                    <button class="btn btn-success btn-sm mr-1" @click="post()">
                        <span>Introduction</span>
                    </button>
                </div>
            </div>
        </div>
        <div v-show="showResults" class="justify-content-center">
            <div class="row">
                <div class="col-sm-3">
                    {{name}}
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3">
                    {{funFact}}
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3">
                    <button class="btn btn-success btn-sm mr-1" @click="reset()">
                        <span>Reset</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import swal from "sweetalert"
    export default {
        name: 'Home',
        props: {
            msg: ''
        },
        data() {
            return {
                name: '',
                funFact: '',
                showResults: false,
                showForm: true
            }
        },
        computed: {
            hasError: function () { return (this.name.length == 0 || this.funFact.length == 0) }
        },
        methods: {
            post() {
                if (this.hasError) {
                    swal('Failure!', 'Please enter both name and fun fact!', 'error');
                    return;
                }
                console.log('Name:', this.name);
                console.log('Fun Fact:', this.funFact);
                this.showResults = true;
                this.showForm = false;
            },
            reset() {
                this.name = ''
                this.funFact = '';
                this.showForm = true;
                this.showResults = false;
            }

        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

