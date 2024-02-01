import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCMENUCLOUDAttributes {
    STRUSERGUID: string;
    STRMENUGUID: string;
    LCLICKCOUNT: number;
}

@Table({
	tableName: "LCMENUCLOUD",
	timestamps: false 
})
export class LCMENUCLOUD extends Model<LCMENUCLOUDAttributes, LCMENUCLOUDAttributes> implements LCMENUCLOUDAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRUSERGUID!: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRMENUGUID!: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	LCLICKCOUNT!: number;

}