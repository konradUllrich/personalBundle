import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ZE_KAT_FREIGABESTATUSAttributes {
    LUSERID?: number;
    DTEDIT?: Date;
    STR_ID?: string;
    STR_SORTIERUNG?: string;
    STRID: string;
    DTINSERT?: Date;
    LUSERIDINSERT?: number;
    STR_FREIGABESTATUS?: string;
}

@Table({
	tableName: "ZE_KAT_FREIGABESTATUS",
	timestamps: false 
})
export class ZE_KAT_FREIGABESTATUS extends Model<ZE_KAT_FREIGABESTATUSAttributes, ZE_KAT_FREIGABESTATUSAttributes> implements ZE_KAT_FREIGABESTATUSAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SORTIERUNG?: string;

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
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_FREIGABESTATUS?: string;

}