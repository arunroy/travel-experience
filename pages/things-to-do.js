import Head from 'next/head';
import Layout from '../components/view/layout';

export default function ThingsToDo(params) {
    return (
        <Layout>
            <Head>
                <title>
                    Munnar Experience - Things to do
                </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Things to do</h1>
        </Layout>
    )
}