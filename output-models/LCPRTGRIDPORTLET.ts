import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCPRTGRIDPORTLETAttributes {
    GUIDREF: string;
    GUIDITEM: string;
    GUIDUSER: string;
    GUIDPORTLET: string;
    LORDER: number;
}

@Table({
	tableName: "LCPRTGRIDPORTLET",
	timestamps: false 
})
export class LCPRTGRIDPORTLET extends Model<LCPRTGRIDPORTLETAttributes, LCPRTGRIDPORTLETAttributes> implements LCPRTGRIDPORTLETAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	GUIDREF!: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	GUIDITEM!: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	GUIDUSER!: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	GUIDPORTLET!: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	LORDER!: number;

}