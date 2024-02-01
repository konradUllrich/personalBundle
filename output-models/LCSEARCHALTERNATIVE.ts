import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCSEARCHALTERNATIVEAttributes {
    STRQUERY: string;
    STRALTERNATIVE: string;
    LCOUNT: number;
}

@Table({
	tableName: "LCSEARCHALTERNATIVE",
	timestamps: false 
})
export class LCSEARCHALTERNATIVE extends Model<LCSEARCHALTERNATIVEAttributes, LCSEARCHALTERNATIVEAttributes> implements LCSEARCHALTERNATIVEAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(512) 
    })
    	STRQUERY!: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(512) 
    })
    	STRALTERNATIVE!: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	LCOUNT!: number;

}