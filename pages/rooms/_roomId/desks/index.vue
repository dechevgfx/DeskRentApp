<template>
    <div>
        <a name="top"></a>
        <div class="grid-container">
            <AllDesks @formDisplay="displayContent" />
        </div>
    </div>
</template>

<script>
import AllDesks from "../../../../components/AllDesks.vue";
export default {
    data() {
        return {};
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
