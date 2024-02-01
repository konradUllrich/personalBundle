import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_ADVERTISINGAttributes {
    TXT_DISTRIBUTOR?: string;
    DT_TO?: Date;
    STR_PRIVACYLEVEL?: string;
    DTEDIT?: Date;
    TXT_DEPARTMENTS?: string;
    STR_TITLE?: string;
    B_ACTIVE?: boolean;
    LUSERID?: number;
    B_DISTRIBUTOR?: boolean;
    L_IMAGE?: number;
    DTINSERT?: Date;
    STR_CATEGORY?: string;
    TXT_DESCRIPTION?: string;
    B_SHARE?: boolean;
    STR_RANDOM_GUID?: string;
    LUSERIDINSERT?: number;
    STR_KNOWLEDGE?: string;
    L_FILEINFORMATION?: number;
    L_COUNT_CLICKS?: number;
    LID: number;
    REF_PROFILE_ID?: string;
    DT_FROM?: Date;
}

@Table({
	tableName: "IS_ADVERTISING",
	timestamps: false 
})
export class IS_ADVERTISING extends Model<IS_ADVERTISINGAttributes, IS_ADVERTISINGAttributes> implements IS_ADVERTISINGAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_DISTRIBUTOR?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_TO?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_PRIVACYLEVEL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_DEPARTMENTS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TITLE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_ACTIVE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_DISTRIBUTOR?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_IMAGE?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_CATEGORY?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_DESCRIPTION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_SHARE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_RANDOM_GUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_KNOWLEDGE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_COUNT_CLICKS?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_PROFILE_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_FROM?: Date;

}