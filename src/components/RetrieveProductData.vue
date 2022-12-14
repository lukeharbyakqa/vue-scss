<template>
    <div class="retrieveProductData wrapper">
        <p class="alignC">
            Tablets
        </p>
        <section
            v-if="errored"
            class="error-message"
        >
            Sorry, there was an issue retreiving product data
        </section>
        <section v-else>
            <p
                v-if="loading"
                class="loading"
            >
                Loading ...
            </p>
            <ul
                v-else
                class="clearfix"
            >
                <li>
                    <ul class="el el-2 filters">
                        <li class="title">
                            Filters
                        </li>
                        <li><a href="#">Desktops</a></li>
                        <li>
                            <a
                                href="#"
                                class="active"
                            >
                                Tablets
                            </a>
                        </li>
                        <li><a href="#">Mobile phones</a></li>
                        <li><a href="#">Accessories</a></li>
                    </ul>
                </li>
                <li>
                    <ul class="el el-10 products-wrapper">
                        <li
                            v-if="remoteFail"
                            class="error-message"
                        >
                            Sorry, could not retrieve remote data
                        </li>
                        <li
                            v-for="items in products.catalogEntryView"
                            v-else
                            :key="items.uniqueID"
                            class="el el-3"
                        >
                            <a :href="items.resourceId">
                                <img
                                    :src="rootDir + items.thumbnail"
                                    :alt="items.name"
                                >
                            </a>
                            <a
                                class="product-name"
                                :href="items.resourceId"
                            >
                                {{ items.name }}
                            </a>
                            <p>
                                Retail price
                                <span class="currency-symbol">
                                    {{ items.price[0].currency | returnCurrencySymbol }}
                                </span>
                                {{ items.price[0].value }}
                            </p>
                            <p class="sale">
                                Sale price
                                <span class="currency-symbol">
                                    {{ items.price[1].currency | returnCurrencySymbol }}
                                </span>
                                {{ items.price[1].value }}
                            </p>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    import axios from 'axios';
    const testDataRemote = 'https://raw.githubusercontent.com/lukeharbyakqa/store/master/db.json';
    const testDataLocal = '../data/mockData.json';

    export default {
        name: 'RetrieveProductData',

        filters: {
            returnCurrencySymbol(value) {
                if (value === 'USD') {
                    return '$';
                } if (value === 'GBP') {
                    return '??';
                } if (value === 'YEN') {
                    return '??';
                }
                return value;
            },
        },
        data() {
            return {
                products: null,
                navData: null,
                loading: true,
                errored: false,
                remoteFail: false,
                rootDir: 'https://preview.commerceservicesdevops.ibmcloud.com',
                productCategory: '10023',
                productCatalogId: '10502',
                productCurrency: 'USD',
            };
        },
        mounted() {
            // retrieve remote data
            const getRemoteData = () => {
                axios
                    .get(testDataRemote)
                    .then((response) => {
                        this.products = response.data;
                    }).catch(() => {
                        this.remoteFail = true;
                        getLocalData();
                    }).finally(() => {
                        this.loading = false;
                    });
            }
            // if remote fails load local data
            const getLocalData = () => {
                axios
                    .get(testDataLocal)
                    .then((response) => {
                        this.products = response.data;
                    }).catch(() => {
                        this.errored = true;
                    }).finally(() => {
                        this.loading = false;
                        this.remoteFail = false;
                    });
            }
            getRemoteData();
        },
    };
</script>
<style lang="scss">
    @import '../app/scss/main.scss';

    .filters {
        a {
            text-decoration: none;
        }
    }

    .retrieveProductData {
        .products-wrapper li {
            margin-bottom: 3rem;
        }

        .sale {
            color: $orange;
        }

        a {
            display: block;

            &.product-name:hover {
                color: $green;
                text-decoration: none;
            }
        }
    }

    @include tablet($tablet-size) {
        .retrieveProductData {
            img {
                width: 100%;
            }
        }
    }
</style>
