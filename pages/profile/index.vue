<template>
    <section class="desks container" id="desks">
        <div class="desks-container container">
            <div class="box">
                <img src="@/assets/img/User.png" alt="" max-width="80px" />

                <div class="content">
                    <h2 class="name">User Name</h2>
                    <h3 class="email">
                        <a href="mailto:yourmail@mail.com">User Email</a>
                    </h3>
                    <h3>
                        <button class="btn">
                            Logout
                        </button>
                    </h3>
                </div>
                <br />
                <div class="centre">
                    <button
                        class="btn-b"
                    >
                        SHOW LIST
                    </button>
                    <button class="btn-b" >
                        HIDE LIST
                    </button>
                    <br />
                    <p >Click here to see your desks.</p>
                    <p >
                        You don't have any bookings.
                    </p>
                    <button class="btn">
                        <nuxt-link :to="`/rooms`">VIEW OUR ROOMS</nuxt-link>
                    </button>
                </div>
                <br />
                <div >
                    <div >
                        DESK LIST
                        <br />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@import url(../../assets/style.css);
</style>
