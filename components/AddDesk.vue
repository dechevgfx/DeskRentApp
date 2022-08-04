<template>
    <div class="container">
        <div>
            <br />
            <div class="box">
                <select>
                    <option disabled selected value="0">ROOM ID</option>
                    <option>
                        Room ID: LIST
                    </option>
                </select>
            </div>
            <br />
            <div class="box">
                <select>
                    <option disabled selected value="0">DESK SIZE</option>
                    <option value="Small">Small</option>
                    <option value="Middle">Middle</option>
                    <option value="Large">Large</option>
                </select>
            </div>
            <br />
            <div class="box">
                <select>
                    <option disabled selected value="0">DESK POSITION</option>
                    <option value="Left">Left</option>
                    <option value="Center">Center</option>
                    <option value="Left">Left</option>
                </select>
            </div>
            <br />
            <div class="box">
                <input
                    class="no-border"
                    type="number"
                    placeholder="ENTER DESK PRICE"
                />
            </div>
            <br />
            <button class="btn add">ADD</button>
        </div>
    </div>
</template>

