import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ABP_KAT_FREIGABESTATUSAttributes {
    STRID: string;
    DTINSERT?: Date;
    STR_FREIGABESTATUS?: string;
    DTEDIT?: Date;
    LUSERID?: number;
    STR_ID?: string;
    LUSERIDINSERT?: number;
    STR_SORTIERUNG?: string;
}

@Table({
	tableName: "ABP_KAT_FREIGABESTATUS",
	timestamps: false 
})
export class ABP_KAT_FREIGABESTATUS extends Model<ABP_KAT_FREIGABESTATUSAttributes, ABP_KAT_FREIGABESTATUSAttributes> implements ABP_KAT_FREIGABESTATUSAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_FREIGABESTATUS?: string;

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
    	type: DataType.STRING(255) 
    })
    	STR_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SORTIERUNG?: string;

}