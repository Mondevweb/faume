<template>
    <section class="faume_faq">
        <div class="faume_faq_title">FAQ</div>

        <div v-for="question in questions" :key="question.id">
            <p @click="toggleQuestion(question.id)" class="faume_faq_question">{{ question.question }}</p>
            <Transition>
                <p v-if="question.show" class="faume_faq_answer">{{ question.answer }}</p>
            </Transition>
        </div>

    </section>
</template>

<script>
export default {
    name: 'FaqComponent',

    data() {
        return {
            questions: [
                {
                    id: 1,
                    question: 'Phasellus mauris nunc ?',
                    answer: 'Pretium eget ipsum. Phasellus vitae efficitur diam, ac interdum ex. Sed mollis purus a augue cursus condimentum.',
                    el: null,
                    show: false,
                },
                {
                    id: 2,
                    question: 'Morbi hendrerit felis a ligula porttitor ?',
                    answer: 'Nam iaculis ut dolor ut maximus. Donec pretium porta mauris quis consectetur. Sed rhoncus cursus sem, ut viverra erat bibendum eu. Quisque quis finibus est. Fusce tristique viverra pulvinar.',
                    el: null,
                    show: false,
                },
                {
                    id: 3,
                    question: 'Duis interdum vestibulum tellus eu elementum ?',
                    answer: 'Maecenas facilisis neque ante, ut hendrerit metus tincidunt vel. Phasellus iaculis mattis dui. Aliquam faucibus odio sed suscipit ultrices. Nullam blandit massa pellentesque, posuere tortor ut, posuere purus.',
                    el: null,
                    show: false,
                }
            ]
        }
    },

    methods: {
        toggleQuestion(questionId) {
            const selectedQuestion = this.questions.find((question) => question.id === questionId);
            selectedQuestion.show = !selectedQuestion.show;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.faume_faq {
    padding: 50px 20px;

    &_title {
        text-align: center;
        font-size: 24px;
        font-weight: $title-weight;
    }

    &_question {
        font-size: 18px;
        font-weight: $title-weight;
        cursor: pointer;
    }

    &_answer {
        margin-bottom: 25px;
    }
}

.v-enter-active, .v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>