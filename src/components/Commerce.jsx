import React, { useState } from "react";
import { CommerceContext } from '@chec/react-commercejs-hooks';


const Commerce = () => {
    const [commerceApi, setCommerceApi] = useState("sk_test_34625d89662524eae2339a99bd011b2c5b74f238ead19")

    return (
        <CommerceContext publicKey={commerceApi}>
            {/* <ProductList /> */}
      </CommerceContext>
    );
};


export default Commerce;