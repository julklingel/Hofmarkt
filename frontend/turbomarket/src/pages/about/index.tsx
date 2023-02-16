import { Fragment } from "react";
import Navbar from "../components/navbar"

export default function AboutPage(props: any) {
    return (
        <Fragment>
            <Navbar />
            <section className=" grid gap-20 grid-rows-6 grid-cols-2 px-48 pt-10  text-c.green">
                <div>
                    <h2 className=" text-2xl">Connecting you to the source of your food</h2>
                    <p>
                        Welcome to our little corner of the internet! We're a company that's all
                        about bringing you closer to the source of your food - the farmers,
                        fishers, hunters, and bakers who produce the healthy and organic goodies
                        that keep us all going.
                    </p>
                </div>
                <div></div>
                <div></div>
                <div>
                <h2 className=" text-2xl">Meet the amazing producers behind your favorite foods</h2>
                <p>
                    We work with a network of amazing primary food producers who are
                    passionate about what they do. They grow, catch, hunt, or bake the best
                    food around, using sustainable and ethical practices that respect the
                    environment and the animals.
                </p>
                </div>
                
                
                <div>
                <h2 className=" text-2xl">Local, sustainable, and oh-so-delicious</h2>
                <p>
                    But here's the best part - all of our producers are local. That means
                    that the food you buy from us is produced right in your own backyard, so
                    to speak. It's fresh, it's seasonal, and it's full of all the good stuff
                    your body craves. Plus, you can feel good knowing that you're supporting
                    your local economy and reducing your carbon footprint by buying food
                    that hasn't had to travel very far to get to your plate.
                </p>
                </div>
                <div></div>
                <div></div>
                <div>

                <h2 className=" text-2xl">Shop from your couch, support your community</h2>
                <p>
                    So what are you waiting for? Come on in and see what we have to offer.
                    We've got everything from juicy, ripe tomatoes to artisanal breads to
                    sustainably caught fish, and everything in between. It's like a farmers
                    market, but without the crowds and the parking hassles. Plus, you can
                    shop from the comfort of your own home
                </p>
                </div>
                <div>
                <h2 className=" text-2xl">Fresh, seasonal, and full of flavor</h2>
                <p>
                    We're all about making healthy and organic food fun and accessible for
                    everyone. So go ahead and indulge your inner foodie - we promise you
                    won't regret it.
                </p>
                </div>
                <div></div>
                <div></div>
                <div>
                <h2 className=" text-2xl">Reduce your carbon footprint with every bite</h2>
                <p>
                    Plus, you can feel good knowing that you're supporting your local
                    economy and reducing your carbon footprint by buying food that hasn't
                    had to travel very far to get to your plate.
                </p>
                </div>
                <div>
                <h2 className=" text-2xl">Taste the difference of locally sourced, organic food</h2>
                <p>
                    From farm to table, we've got you covered. It's like a farmers market,
                    but without the crowds and the parking hassles. Plus, you can shop from
                    the comfort of your own home - no need to change out of your pajamas!
                    Join the foodie revolution and taste the difference of locally sourced,
                    organic food that's fresh, seasonal, and full of flavor.
                </p>
                </div>
            </section>
        </Fragment>
    );
}
