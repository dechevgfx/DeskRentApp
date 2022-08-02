<template>
    <div class="space-above">
        <RoomDetails></RoomDetails>
        <NuxtChild></NuxtChild>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    middleware: "authentication",
};
</script>
