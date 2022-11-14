import React, { useState } from 'react';

export default function ViewCreditCards(props) {
    return (
        <div class="flex flex-col">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full">
                        <thead class="bg-white border-b">
                            <tr>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Name
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Card Number
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Balance
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Limit
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.cardData.length>0 && props.cardData.map((item) =>
                                <tr class="bg-gray-100 border-b"  key={item._id}>
                                    <td class="px-6 py-4 text-left whitespace-nowrap text-sm font-medium text-gray-900">
                                        {item.username}
                                    </td>
                                    <td class="text-sm text-left text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {item.cardnumber}
                                    </td>
                                    <td class="text-sm text-left text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        £{item.balance}
                                    </td>
                                    <td class="text-sm text-left text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        £{item.limit}
                                    </td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}