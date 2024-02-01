import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface CAL_KAT_ZUSATZLEISTUNGENAttributes {
    DTINSERT?: Date;
    STR_ZUSATZLEISTUNG?: string;
    STRID: string;
    DTEDIT?: Date;
    LUSERID?: number;
    LUSERIDINSERT?: number;
}

@Table({
	tableName: "CAL_KAT_ZUSATZLEISTUNGEN",
	timestamps: false 
})
export class CAL_KAT_ZUSATZLEISTUNGEN extends Model<CAL_KAT_ZUSATZLEISTUNGENAttributes, CAL_KAT_ZUSATZLEISTUNGENAttributes> implements CAL_KAT_ZUSATZLEISTUNGENAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ZUSATZLEISTUNG?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

}