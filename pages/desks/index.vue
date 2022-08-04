<template>
    <section class="desks container" id="desks">
        <div class="heading">
            <h2>DESKS</h2>
            <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div class="desks-container container">
            <div class="box">
                <button @click="formDisplay = !formDisplay" class="btn add">
                    ADD NEW DESK
                </button>
                <AddDesk v-if="formDisplay"></AddDesk>
            </div>
        </div>
        <br />
        <div class="desks-container container">
            <div class="box">
                <ul>
                    <li>
                        List of desk which admin can control.
                    </li>
                </ul>
            </div>
            <div>
                <p class="centre">There are no desks added</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            formDisplay: false,
        };
    }
}
</script>
