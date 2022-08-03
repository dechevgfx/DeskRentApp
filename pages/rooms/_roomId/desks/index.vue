<template>
    <div>
        <a id="top"></a>
        <div>
            <RentForm v-if="formDisplay" />
        </div>
        <div class="grid-container">
            <AllDesks @formDisplay="displayContent" />
        </div>
    </div>
</template>

<script>
import AllDesks from "../../../../components/AllDesks.vue";
export default {
    data() {
        return {
            formDisplay: false,
        };
    },
    methods: {
        displayContent() {
            this.formDisplay = true;
        },
    },
    components: { AllDesks },
    middleware: "authentication",
};
</script>