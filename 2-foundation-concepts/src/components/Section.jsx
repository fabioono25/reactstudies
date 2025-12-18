export default function Section({ title, children, ...props }) {

    const { test } = props;

    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
            <p>{test}</p>
        </section>
    );
}